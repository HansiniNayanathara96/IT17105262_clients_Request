$(document).ready(function () {
    
    var seller = {};

    //getAllSellers();
    $('#btnModelAddSeller').click(function () {

        seller.companyName = $('#txtCompanyName').val();
        seller.contact = $('#txtContact').val();
        seller.username = $('#txtUsername').val();
        seller.password = $('#txtPassword').val();
        
        var sellerObj = JSON.stringify(seller);
        $.ajax({
            url: "http://localhost:8080/gaget/api/users/seller",
            method: "POST",
            data: sellerObj,
            contentType: 'application/json; charset=utf-8',
            success: function () {
                
                alert('Saved successfully');
                location.replace("seller-list.html");
                $('#fundraiserAddModal').modal('hide');               
            },
            error: function (error) {
                alert('error', error);
            }
        })
    })
});

