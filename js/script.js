

fetch("https://data.messari.io/api/v1/assets/btc/metrics")
    .then(res => res.json())
    .then(messariRes => messariRes.data)
    .then(payload => (document.getElementById("btcmarket").innerHTML = '$' + payload.marketcap.current_marketcap_usd.toLocaleString(console.log(payload)))
);
fetch("https://data.messari.io/api/v1/assets/btc/metrics")
    .then(res => res.json())
    .then(messariRes => messariRes.data)
    .then(payload => (document.getElementById("btcmarket2").innerHTML = '$' + payload.all_time_high.price.toLocaleString(console.log(payload)))
);
fetch("https://data.messari.io/api/v1/assets/btc/metrics")
    .then(res => res.json())
    .then(messariRes => messariRes.data)
    .then(payload => (document.getElementById("btcmarket3").innerHTML = '$' + payload.market_data.price_usd.toLocaleString())
);

