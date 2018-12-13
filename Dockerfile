FROM nginx
ENV TZ=Europe/Moscow
COPY ./dist/angular-quizzz /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/nginx.conf
RUN rm -f /etc/nginx/conf.d/default.conf
