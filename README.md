# Install NodeJs

```sh
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt-get install -y nodejs
```

# Install yarn
```sh
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt-get update && sudo apt-get install yarn
sudo apt-get update && sudo apt-get install --no-install-recommends yarn
```

# Install Packages

[sequelize](https://sequelize.org/v5/manual/getting-started.html)

```sh
yarn add express
yarn add pg
yarn add pg-hstore
yarn add sequelize
yarn add sequelize-cli -D
yarn add nodemon -D
```
