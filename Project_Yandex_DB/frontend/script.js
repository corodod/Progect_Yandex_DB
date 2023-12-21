function preconvert_json(string) {
    let json = string.split('\'').join("\"");
    return json.split('b\"').join("\"");
}

function update_transaction_list(data) 
{
    $("#order_table td").parent().remove();
    let received_orders = JSON.parse(preconvert_json(data));
    if(received_orders.length > 0)
    {
        for(let i = 0; i < received_orders.length; ++i) {
            let order = new Order(received_orders[i]);
            $('#order_table tr:last').after(order.to_table_entry());
        }
        $("#transaction_table").show();
    } else {
        output_error("Incorrect data received")
    }
}

function update_dispatch_list(data) 
{
    $('categories').parent().remove();
    let received_dispatches = JSON.parse(preconvert_json(data));
    
    if(received_dispatches.length > 0)
    {
        for(let i = 0; i < received_dispatches.length; ++i) {
            let dispatch = new Store(received_dispatches[i]);
            $('#categories').append(dispatch.to_option_entry());
        }
        $("#categories").show();
    } else {
        output_error("Incorrect data received")
    }
}

function output_error(message, timeout = 2000) 
{
    $('.error_message').show();
    $('.error_message').text(message);
    setTimeout(function() {
        $('.error_message').hide();
    }, timeout);
}

function getRequest(data, successFunction) {
    $.ajax({
        url: yandex_function_url,
        method: 'GET',
        data: data,
        success: function(data){ 
            successFunction(data)   
        }
    }).fail(function(data){
        output_error("GET request failed");
    })
}