$(function () {
    console.log('page init');

    function AppViewModel() {
        var self = this;

        self.fields = ko.observableArray([
            { fieldName: 'name', fieldType: 'text', fieldValue: 'John Liu' },
            { fieldName: 'email', fieldType: 'text', fieldValue: 'chiyiangel@gmail.com' },
            { fieldName: 'sex', fieldType: 'select', fieldValue: '1', selectoptions: [{ oname: 'Male', oid: 0 }, { oname: 'Female', oid: 1 }] },
            { fieldName: 'phone', fieldType: 'text', fieldValue: '' },
            { fieldName: 'isBu', fieldType: 'radio', fieldValue: 'true' },
            { fieldName: 'name', fieldType: 'text', fieldValue: 'John Liu' },
            { fieldName: 'email', fieldType: 'text', fieldValue: 'chiyiangel@gmail.com' },
            { fieldName: 'sex', fieldType: 'select', fieldValue: '1', selectoptions: [{ oname: 'Male', oid: 0 }, { oname: 'Female', oid: 1 }] },
            { fieldName: 'phone', fieldType: 'text', fieldValue: '' },
            { fieldName: 'email', fieldType: 'text', fieldValue: 'chiyiangel@gmail.com' },
            { fieldName: 'email', fieldType: 'text', fieldValue: 'chiyiangel@gmail.com' },
            { fieldName: 'phone', fieldType: 'text', fieldValue: '' },
            { fieldName: 'isBu', fieldType: 'radio', fieldValue: 'true' },
            { fieldName: 'email', fieldType: 'text', fieldValue: 'chiyiangel@gmail.com' },
            { fieldName: 'email', fieldType: 'text', fieldValue: 'chiyiangel@gmail.com' },
            { fieldName: 'email', fieldType: 'text', fieldValue: 'chiyiangel@gmail.com' },
        ]);

        self.fieldCount = ko.computed(function () {
            return self.fields().length;
        });

        self.submitForm = function (event) {
            debugger;
        }

    }

    ko.applyBindings(new AppViewModel());

});