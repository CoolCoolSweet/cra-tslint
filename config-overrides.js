
const {
    edit,
} = require('@rescripts/utilities');
module.exports = {
    webpack: (config) => {
        // for handling direct json imports using file-loader
        return edit(
            matchedSection => [
                {
                    test: /\.ts$/,
                    enforce: 'pre',
                    use: [
                        {
                            loader: 'tslint-loader',
                            options: { /* Loader options go here */ }
                        }
                    ]
                },
                ...matchedSection,
            ],
            [['module', 'rules']],
            config,
        );
    }
};
