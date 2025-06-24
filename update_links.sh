#!/bin/bash

find . -type f -name "*.html" -exec sed -i \
  -e 's/about.html/about-us-globetek.html/g' \
  -e 's/partner.html/partner-portal-globetek.html/g' \
  -e 's/clientele.html/our-clientele-globetek.html/g' \
  -e 's/case-study.html/case-study-globetek.html/g' \
  -e 's/events.html/events-globetek.html/g' \
  -e 's/contact.html/contact-us-globetek.html/g' \
  -e 's/home.html/home-globetek.html/g' \
  -e 's/blogs.html/blogs-globetek.html/g' \
  -e 's/t&c.html/terms-and-conditions-globetek.html/g' \
  -e 's/telcos-sol.html/internet-management-for-telcos-isp-bsp-msp.html/g' \
  -e 's/hotel-sol.html/internet-management-for-hotels-resorts.html/g' \
  -e 's/airport-sol.html/internet-management-for-airports-transport-station.html/g' \
  -e 's/bank-sol.html/internet-management-for-bank-ites.html/g' \
  -e 's/hospital-sol.html/internet-management-for-hospitals.html/g' \
  -e 's/education-sol.html/internet-management-for-educational-institutions.html/g' \
  -e 's/hotspot-sol.html/internet-management-for-smart-cities.html/g' \
  -e 's/mall-sol.html/internet-management-for-stadium-and-shopping-mall.html/g' \
  -e 's/resturant-sol.html/internet-management-for-restaurant-cafes.html/g' \
  -e 's/stock-sol.html/internet-management-for-stock-exchanges-space-research-center-defence-sectors-and-courts.html/g' \
  -e 's/religious-sol.html/internet-management-for-religious-institutions-events.html/g' \
  -e 's/house-sol.html/internet-management-for-housing-complex-service-apartments.html/g' \
  -e 's/internet-management-for-religious-institutions-events-globetek.html/internet-management-for-religious-institutions-events.html/g' {} \; 