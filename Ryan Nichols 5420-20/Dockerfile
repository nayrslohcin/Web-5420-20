FROM amazonlinux:2023

LABEL   "name"="Web4520" \
        "version"="1.0" \
        "description"="A Docker image for a web application created for my Web 4520 class"

MAINTAINER "nayrslohcin"

RUN yum -y update && \
    yum install -y httpd

EXPOSE 80 3306
VOLUME /var/www/html
WORKDIR /var/www/html
COPY html/ /var/www/html
RUN chown -R apache:apache /var/www/html && \
    chmod -R 755 /var/www/html

ENTRYPOINT ["/usr/sbin/httpd", "-D", "FOREGROUND"]