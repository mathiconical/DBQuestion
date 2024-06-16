/**
 * make a fetch call
 *
 * @param   {string}  url     url
 * @param   {Object}  data    data to be sent
 * @param   {string}  type    type of request
 * @param   {Object}  params  optional parameters to override default fetch configuration
 *
 * @return  {Response}        response
 */
async function doCall(url, data, type, params) {
    const defaultConfig = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': getCookie('csrftoken'),
        },
        withCredentials: true,
    };

    try {
        const response = await fetch(url, {
            ...defaultConfig,
            ...params,
            method: type,
            body: !data ? null : JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error(`Error on request: Status [${response.status}]`);
        }

        try {
            const responseData = await response.json();
            return responseData;
        } catch (error) {
            return response;
        }
    } catch (error) {
        console.error("Error: ", error);
        throw error;
    }
}

/**
 * do a POST request
 *
 * @param   {string}  url              url
 * @param   {callback}  successCallback  success callback
 * @param   {callback}  errorCallback    error callback
 * @param   {Object}  params           optional parameters to override default fetch configuration
*/
async function doPost(url, data = {}, successCallback = null, errorCallback = null, params = {}) {
    const response = await doCall(url, data, 'POST', successCallback, errorCallback, params);
        if (successCallback != null) successCallback(response);
        if (errorCallback != null) errorCallback(response);
}

/**
 * do a GET request
 *
 * @param   {string}  url              url
 * @param   {callback}  successCallback  success callback
 * @param   {callback}  errorCallback    error callback
 * @param   {Object}  params           optional parameters to override default fetch configuration
*/
async function doGet(url, successCallback = null, errorCallback = null, params = {}) {
    const response = await doCall(url, null, 'GET', successCallback, errorCallback, params);
        if (successCallback != null) successCallback(response);
        if (errorCallback != null) errorCallback(response);
}
