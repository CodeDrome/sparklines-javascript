
window.onload = function()
{
    const prices = getPrices();

    for(price of prices)
    {
        createSparkline(price.prices, 16, 16, "#FF0000", price.code);
    }
}


function getPrices()
{
    const prices = [{code: "gs", prices: [401.5, 443.9, 422.2, 432.7, 483.1, 501.8, 538.4, 522.7]},
                    {code: "nm", prices: [187.5, 162.9, 151.0, 188.1, 224.4, 218.9, 201.5, 192.6]},
                    {code: "ca", prices: [855.3, 841.0, 801.5, 818.9, 832.3, 850.7, 880.6, 895.2]},
                    {code: "os", prices: [255.5, 285.9, 310.8, 322.4, 305.1, 276.7, 260.0, 292.4]},
                    {code: "ta", prices: [390.4, 485.9, 466.7, 380.2, 360.7, 420.8, 441.4, 475.9]},
                    {code: "xs", prices: [62.4, 52.9, 44.2, 64.8, 74.0, 75.2, 95.5, 102.7]}];

    return prices;
}
