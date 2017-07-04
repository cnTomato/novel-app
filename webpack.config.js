/**
 * Created by pan on 2017/6/29.
 */
module.exports = function (env) {
    return require(`./webpack.config.${env}.js`)
};