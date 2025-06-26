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
  -e 's/telcos-sol.html/isp-billing-isp-bandwidth-management-aaa-solution.html/g' \
  -e 's/hotel-sol.html/hotel-guest-wifi-guest-wifi-management-captive-portal-hotel.html/g' \
  -e 's/airport-sol.html/passenger-wifi-airport-railway-internet-solution.html/g' \
  -e 's/bank-sol.html/internet-management-banks-ites-secure-wifi-bandwidth.html/g' \
  -e 's/hospital-sol.html/hospital-wifi-solution-medical-wifi-hospital-internet.html/g' \
  -e 's/education-sol.html/student-wifi-university-campus-hotspot-solution.html/g' \
  -e 's/hotspot-sol.html/smart-city-wifi-smart-city-hotspot.html/g' \
  -e 's/mall-sol.html/mall-wifi-engagement-shopping-mall-wifi-food-court-wifi-solution.html/g' \
  -e 's/resturant-sol.html/restaurant-wifi-solution-cafe-foodcourt-guest-wifi-solution.html/g' \
  -e 's/stock-sol.html/secured-internet-management-stock-defense-sensitive-sectors.html/g' \
  -e 's/religious-sol.html/religious-institution-wifi-secure-event-connectivity.html/g' \
  -e 's/house-sol.html/wifi-management-housing-complexes-and-apartments.html/g' \
  -e 's/religious-institution-wifi-secure-event-connectivity-globetek.html/religious-institution-wifi-secure-event-connectivity.html/g' {} \; 