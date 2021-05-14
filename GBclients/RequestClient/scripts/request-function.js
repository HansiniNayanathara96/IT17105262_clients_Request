$(document).ready(function () {
    
    var request = {};
    var fid = 1;
    getAllRequests(fid);
    
})

function getAllRequests(id) {
    $.ajax({
        url: "http://localhost:8080/gaget/api/request/"+id,
        method: "GET",
        dataType: "json",
        success: function (data) {
            var tableBody = $('#tblRequest tbody');
            tableBody.empty();
            $(data).each(function (index, element) {
                tableBody.append('<tr> <td>' + element.productId + 
                '</td><td>' + element.productName +
                    '</td><td>' + element.productPrice + 
                    '</td><td>' + element.description +
                    '</td><td>'+element.requestDescription+
                    '</td><td><button type="button" class="btn btn-warning btn-sm" onclick="updateRequest('+ element.fundraiserId+','+element.productId+',\''+element.requestDescription+'\')"> Update</button> | <button type="button" class="btn btn-danger btn-sm" onclick="deleteRequest('+ element.fundraiserId +',' + element.productId + 
                    ')"> Delete </button></td> </tr>')
            });
        },
        error: function (error) {
            alert(error);
        }
    })
}
//get id value to popup modal
function deleteRequest(fid, pid) {
    var request = {};
    //$('#txtProductIdD').val(data);
    console.log("fid ---",fid);
    console.log("pid ---",pid);

    $('#txtFundraiserIdD').val(fid);
    $('#txtProductIdD').val(pid);

    $('#requestDeleteModal').modal('show');
}
//trigger delete request
function makeDELETErequestOnRequest() {
    var fundraiserId = $('#txtFundraiserIdD').val();
    var productId = $('#txtProductIdD').val();
  
    $.ajax({
        url: 'http://localhost:8080/gaget/api/request/' +fundraiserId+'/'+ productId,
        method: 'DELETE',
        success: function () {
            alert('record ' + productId + ' has been deleted');
            location.reload();
        },
        error: function (error) {
            alert(error);
        }
    });
    $('#requestDeleteModal').modal('hide');
}
//get values to pop up modal
function updateRequest(fid,pid,reqDes) {
    var request = {};
    console.log("fid ---",fid);
    console.log("pid ---",pid);
    console.log("reqDes ---",reqDes);

    $('#txtFundraiserIdU').val(fid);
    $('#txtProductIdU').val(pid);
    $('#txtRequestDescriptionU').val(reqDes);

    $('#requestUpdateModal').modal('show');
    
}

//trigger update request
function makePUTrequestOnRequest(){
    var request = {};

    request.fundraiserId = $('#txtFundraiserIdU').val();
    request.productId = $('#txtProductIdU').val();
    request.requestDescription = $('#txtRequestDescriptionU').val();
    //request.userId = $('#txtUserIdU').val();

    var requestObj = JSON.stringify(request);

    $.ajax({
    url: 'http://localhost:8080/gaget/api/request/',
    type: 'PUT',
    data: requestObj,
    contentType: 'application/json; charset=utf-8',
    success: function (result) {
        alert('record  has been updated');
        location.reload();
    }
});
$('#requestUpdateModal').modal('hide');
}

function reset() {
    $('#txtCompanyName').val('');
    $('#txtContact').val('');
    $('#txtUsername').val('');
    //$('#txtId').val('');
}
        
