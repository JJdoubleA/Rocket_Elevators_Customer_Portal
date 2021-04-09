$(document).ready(function() {

    var value = "";
    var data;

    hideBuilding()

    async function getData(id, value) {
        const data = await $.ajax({
            type: "GET",
            url: `/ajax/GetData?id=${id}&value=${value}`,
        })
        return data
    }

    $('#customers').change(async function(event){
        event.stopImmediatePropagation();
        value = $(this).val()
        if (value === "") {
            hideBuilding()
        }
        else
        {


            $('#buildings').show()
            let buildings = [new Option("Select a building", "")]
            data = await getCustomer(value, "building")
            data.forEach((element) => { buildings.push(new Option(`${item.full_name_of_the_technical_contact_for_the_building}, Building ID: ${element.id}`, element.id)) });
            $('#buildings').html(buildings)

            function getCustomer() {
                $.ajax({
                    url: "https://rocket-rest-api.herokuapp.com/api/Customers/1",
                    type: "GET",
                    dataType: "JSON",
                    data: JSON.stringify({}),
                    success: function (data) {
                        console.log(data);
                        $("select#customers option").remove();
                        $('#customers').append("<option>" + JSON.stringify(data.company_name) + "</option>")
                    }
                    
                });
            }
        }    
    });


    $('#buildings').change(async function(event){
        event.stopImmediatePropagation();
        value = $(this).val()
        if (value === "") {
            hideBattery()
        }
        else
        {
           
            $('#batteries').show()
            let batteries = [new Option("Select a battery", "")]
            data = await getBuilding(value, "battery")
            data.forEach((element) => { batteries.push(new Option(`Battery ID: ${element.id}`, element.id)) });
            $('#batteries').html(batteries)

            function getBuilding() {
                $.ajax({
                    url: "https://rocket-rest-api.herokuapp.com/api/buildings/1",
                    type: "GET",
                    dataType: "JSON",
                    data: JSON.stringify({}),
                    success: function (data) {
                        console.log(data);
                        $("select#buildings option").remove();
                        $('#buildings').append("<option>" + JSON.stringify(data.full_name_of_the_building_administrator) + "</option>")

                    }

                });
            }
        }
    });

    $('#batteries').change(async function(event){
        event.stopImmediatePropagation();
        value = $(this).val()
        if (value === "")
        {
            hideColumn()
        }
        else
        {

            $('#columns').show()
            let columns = [new Option("Select a column", "")]
            data = await getBattery(value, "column")
            data.forEach((element) => { columns.push(new Option(`Column ID: ${element.id}`, element.id)) });
            $('#columns').html(columns)

            function getBattery() {
                $.ajax({
                    url: "https://rocket-rest-api.herokuapp.com/api/batteries/1",
                    type: "GET",
                    dataType: "JSON",
                    data: JSON.stringify({}),
                    success: function (data) {
                        $("select#batteries option").remove();

                        $('#batteries').append("<option>" + JSON.stringify(data.id) + "</option>")

                    }
                });
            }
        }
    });

    $('#columns').change(async function(event){
        event.stopImmediatePropagation();
        value = $(this).val()
        if (value === "")
        {
            hideElevator()
        }
        else
        {

            $('#elevators').show()
            let elevators = [new Option("Select a elevator", "")]
            data = await getColumn(value, "elevator")
            data.forEach((element) => { elevators.push(new Option(`Elevator ID: ${element.id}`, element.id)) });
            $('#elevators').html(elevators)

            function getColumn() {
                $.ajax({
                    url: "https://rocket-rest-api.herokuapp.com/api/columns/1",
                    type: "GET",
                    dataType: "JSON",
                    data: JSON.stringify({}),
                    success: function (data) {
                        $("select#columns option").remove();
                        $('#columns').append("<option>" + JSON.stringify(data.id) + "</option>")

                    }
                });
            }
        }

    });


    function hideBuilding()
    {
            $('#buildings').hide()
            hideBattery()
    }

    function hideBattery()
    {
            $('#batteries').hide()
            hideColumn()
    }

    function hideColumn()
    {
            $('#columns').hide()
            hideElevator()
    }

    function hideElevator()
    {
            $('#elevators').hide()
    }




    
    
    // fetch('https://localhost:5001/api/Customers/kerry.witting@kilback.biz')
    //     .then(res => res.json())
    //     .then(data => console.log(data))

});