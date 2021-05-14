$(document).ready(function () {
    var seller_id = 1;
    var request = {};

    //getAllrequests();

    
    $('#btnModelAddRequest').click(function () {

        //request.requestName = $('#txtRequestName').val();
        //request.requestType = $('#txtRequestType').val();
        //request.requestPrice = $('#txtRequestPrice').val();
        //request.image = $('#txtRequestImage').val();
        //request.relatedField = $('#txtRelatedField').val();
        request.description = $('#txtRequestDescription').val();
        request.sellerId = $('#txtFundraiserId').val();
        request.sellerId = $('#txtProductId').val();
        
        var requestObj = JSON.stringify(request);
        $.ajax({
            url: "http://localhost:8080/gaget/api/request",
            method: "POST",
            data: requestObj,
            contentType: 'application/json; charset=utf-8',
            success: function () {
                
                alert('Saved successfully');
                //location.replace("request-list.html");
                $('#requestAddModal').modal('hide');               
            },
            error: function (error) {
                alert('error', error);
            }
        })
    })
});

