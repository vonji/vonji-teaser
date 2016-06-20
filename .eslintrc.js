module.exports = {
    "extends": [
      "airbnb",
      "plugin:import/errors",
      "plugin:import/warnings",
    ],
    "installedESLint": true,
    "plugins": [
        "react",
        "import",
    ],
    "rules": {

      // Deactivated for dev mode.
      "react/prop-types": 0,
      "prefer-template": 0,
      "no-console": 0,
      "react/prefer-stateless-function": 0,
      "no-useless-constructor": 0,
      "global-require": 0,
      "max-len": 0,
    }
};
