# jquery.formfill


```javascript
    $('.form').formFill({
        data: {
            text: 'text',
            password: 'password',
            radio: 'r2',
            checkbox: ['c2', 'c1', 'c3'],
            select23: 's2',
            selectm: ['sm1', 'sm3'],
            textarea: 'textarea6666'
        },
        parse: function (data) {
            data.select = data.select23;
        },
        keyMap: {
            select23: 'select'
        }
    });
```