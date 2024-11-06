const paypal= require('paypal-rest-sdk');



paypal.configure({
    mode:'sandbox',
    client_id:'AQ_JLAxOXIbfjrstX4o2gvFG3RrSwC6ub3YIayQVUsaHhdgV407fsETXcnzxMo4PwT5jmChs_ErkrmYH' ,
    client_secret: 'ECST1_KXPGC4ZzeaqFojybGfjE6okRoauef36yS7sVpChVpvAmYhCkZaABBxtXwDNJOEqYwji4S3XEuF',
});

module.exports = paypal;