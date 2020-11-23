sudo: false
language: node_js
cache:
  directories:
    - node_modules
branches:
  only:
    - master
notifications:
  email: false
before_script:
  - npm prune
script:
  - npm run test
  - npm run build
after_success:
  - npm run semantic-release
