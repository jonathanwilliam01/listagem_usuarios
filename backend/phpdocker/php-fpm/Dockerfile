FROM phpdockerio/php:8.3-fpm
WORKDIR "/backend"

RUN apt-get update \
    && apt-get -y --no-install-recommends install \
        php8.3-sqlite3 \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* /usr/share/doc/*
