const Alert = {
    _queue: [],
    _queueRunning: [],
    _maxAlertsRunning: 4,
    _idInterval: null,
    _duration: 6000,
    _delay: 1500,
    _spaceBetweenAlerts: 5,

    processItem: function (item) {
        const axisY = (document.getElementsByClassName('alert-utils').length * this._spaceBetweenAlerts);

        item.html = item.html.replace('%axisY%', axisY);

        this._queueRunning.push({ item, time: (new Date().getTime()) });

        document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeend', item.html);
    },

    initQueueRunning: function() {
        if (this._idInterval == null && (this._queue.length > 0 || this._queueRunning.length > 0)) {
            this._idInterval = setInterval(() => {
                let alertsRunning = document.getElementsByClassName('alert-utils').length;

                // console.log('alerts runnign: ', alertsRunning, 'queue length: ', this._queue.length, 'queue: ', this._queue);

                if (this._queue.length > 0 && alertsRunning < this._maxAlertsRunning && this._queueRunning.length < this._maxAlertsRunning) {
                    this.processItem(this._queue.shift());
                } else if (this._queue.length === 0 && alertsRunning === 0 && this._queueRunning.length === 0) {
                    clearInterval(this._idInterval);
                    this._idInterval = null;
                } else {
                    for (let i = 0; i < this._queueRunning.length; i++) {
                        const alertEl = document.getElementById(`${this._queueRunning[i].item.type}_${this._queueRunning[i].item.randomId}`);

                        if ((new Date().getTime()) - this._queueRunning[i].time > this._duration) {
                            alertEl.classList.remove('alert-utils');
                            alertEl.classList.add('alert-removing');
                            alertEl.remove();

                            this._queueRunning.splice(i, 1);
                        } else {
                            alertEl.style.bottom = `${i * this._spaceBetweenAlerts}em`;
                        }
                    }
                }
            }, 100);
        }
    },

    appendQueue: function (item) {
        this._queue.push(item);
        this.initQueueRunning();
    },

    createAlert: function (type, message) {
        const randomId = Math.floor(Math.random() * 10000000);

        const html = `
            <div class='alert alert-${type} alert-utils' role='alert' id='${type}_${randomId}' style='bottom: %axisY%em !important;'>
                ${message}
            </div>
        `;

        this.appendQueue({ html, randomId, type});
    },
    success: function (message) {
        this.createAlert('success', message);
    },
    error: function (message) {
        this.createAlert('danger', message);
    },
    info: function (message) {
        this.createAlert('info', message);
    },
    warning: function (message) {
        this.createAlert('warning', message);
    },
};
