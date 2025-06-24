#!/bin/bash

find . -type f -name "*.html" -exec sed -i \
  -e 's|<a href="#">.*facebook-new.png.*</a>|<a href="https://www.facebook.com/globetek.co.in/" target="_blank"><img src="https://img.icons8.com/ios-filled/32/ffffff/facebook-new.png" alt="Facebook"/></a>|g' \
  -e 's|<a href="#">.*linkedin.png.*</a>|<a href="https://www.linkedin.com/company/globetek-infoway/" target="_blank"><img src="https://img.icons8.com/ios-filled/32/ffffff/linkedin.png" alt="LinkedIn"/></a>|g' \
  -e 's|<a href="#">.*instagram-new.png.*</a>|<a href="https://www.instagram.com/globetekinfoway/" target="_blank"><img src="https://img.icons8.com/ios-filled/32/ffffff/instagram-new.png" alt="Instagram"/></a>|g' {} \; 