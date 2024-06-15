FROM php:8.3.8-fpm-bullseye

RUN apt update && apt install -y \
    git \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip \
    libbz2-dev \
    vim \
    nano \
    default-mysql-client \
    wget \
    curl \
    cron \
    libzip-dev \
    libfreetype6 \
    libx11-dev \
    openssl \
    libssl-dev \
    libfontconfig1-dev \
    libicu-dev \
    libssl-dev \
    libpng-dev \
    libjpeg-dev \
    libx11-dev \
    libxext-dev \
    chrpath \
    libxft-dev \
    libfreetype6-dev \
    libfontconfig1 \
    sed \
    tar \
    supervisor

RUN apt-get clean && rm -rf /var/lib/apt/lists/*

RUN docker-php-ext-configure zip && \
    docker-php-ext-configure gd --with-freetype --with-jpeg && \
    docker-php-ext-configure intl
RUN docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd soap intl bz2 zip

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

RUN cd /usr/local/etc/php/conf.d/ && echo 'memory_limit = -1' >> /usr/local/etc/php/conf.d/docker-php-ram-limit.ini

RUN mkdir -p /var/www/dbq/storage/framework/cache && \
    mkdir -p /var/www/dbq/storage/framework/sessions && \
    mkdir -p /var/www/dbq/storage/framework/views && \
    mkdir -p /var/www/dbq/storage/app

WORKDIR /var/www/dbq
