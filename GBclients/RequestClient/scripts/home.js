$(document).ready(function () {

    var product = {};
    var uid = 1; //fundraiser Id
    var cid = 1; // customer Id

    getAllProducts(uid, cid);

});


function getAllProducts(uid, cid) {

    $.ajax({
        url: "http://localhost:8080/gaget/api/products/" + uid,
        method: "GET",
        dataType: "json",
        success: function (data) {
            var cardList = $('#cardListBody');
            cardList.empty();
            $(data).each(function (index, element) {

                cardList.append('<div class="col"><div class="card h-110 text-center shadow"><img src="' + element.image +
                    '" width="170" height="185" class="card-img-top"><div class="card-body"><h5 class="card-title">' + element.productName +
                    '</h5><p class="card-text text-danger"><input type="hidden" id="txtProductPrice" value="' + element.productPrice + '">Rs: ' + element.productPrice +
                    '.00</p><input type="hidden" id="txtNumOfItem" style="width: 40px;" value="1"><input type="hidden" id="txtProductId" value="' + element.productId +
                    '"><br><input type="hidden" id="txtCustomerId" value="' + cid + '"><button type="button" class="btn btn-dark btn-sm mt-2" onclick="addRequest(' + uid + ',' + element.productId + ')"> Request </button></div></div></div>');

            });
        },
        error: function (error) {
            alert(error);
        }
    })
}
/*
function addRequest(fid, pid) {
    //var fundraiser_id = 1;
    console.log("fid", fid);
    console.log("pid", pid);
    //$('#txtRequestDescription').val();
    $('#txtProductId').val(pid);
    $('#txtFundraiserId').val(fid);
    

    $('#requestAddModal').modal('show');

}
*/
function addRequest(fid, pid) {
    //var request = {};
    //$('#txtProductIdD').val(data);
    console.log("fid ---",fid);
    console.log("pid ---",pid);

    $('#txtFundraiserId').val(fid);
    $('#txtProductIdA').val(pid);

    $('#requestAddModal').modal('show');
}

function makePOSTrequestOnRequest() {
    var request = {};

    request.requestDescription = $('#txtRequestDescription').val();
    request.fundraiserId = $('#txtFundraiserId').val();
    request.productId = $('#txtProductId').val();
    
    console.log("request",request);

    var requestObj = JSON.stringify(request);
    $.ajax({
        url: "http://localhost:8080/gaget/api/request",
        method: "POST",
        data: requestObj,
        contentType: 'application/json; charset=utf-8',
        success: function () {

            alert('Saved successfully');
            location.replace("home.html");
            $('#requestAddModal').modal('hide');
        },
        error: function (error) {
            alert('error', error);
        }
    })
}