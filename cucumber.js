module.exports = {
  default:
    {
        path:["features/**/*.feature"],
        require:[
            "step-definitions/**/*.ts"
        ],
        requireModule:[
            "ts-node/register"
        ],
        publishQuiet:true
    }
};