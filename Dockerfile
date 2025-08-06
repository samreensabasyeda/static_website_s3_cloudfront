# Use official Nginx image as base
FROM nginx:alpine

# Remove the default static assets from nginx
RUN rm -rf /usr/share/nginx/html/*

# Copy your static site content into the container
COPY index.html /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/
COPY assets/ /usr/share/nginx/html/assets/

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
