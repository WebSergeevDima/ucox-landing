document.addEventListener('DOMContentLoaded', ()=> {

    const calcInputsLong = document.querySelectorAll('.js-calculate__input-long');
    const calcInputsShort = document.querySelectorAll('.js-calculate__input-short');
    const resultInput = document.querySelector('[name="result"]');

    const clearLong = () => {
        calcInputsLong.forEach(input => {
            input.value = '';
        });
    };

    const clearShort = () => {
        calcInputsShort.forEach(input => {
            input.value = '';
        });
    };

    calcInputsLong.forEach(item => {
       item.addEventListener('input', (e) => {

           let isResult = true;
           let result = 0;
           let length = 0;
           let width = 0;
           let height = 0;
           let weight = 0;

           clearShort();

           e.currentTarget.value = e.currentTarget.value.replace(/[^\d.]/g, '');

           calcInputsLong.forEach(input => {
               if(!input.value) {
                   isResult = false;
               }

               if(input.name === 'length') {
                   length = input.value;
               }
               if(input.name === 'width') {
                   width = input.value;
               }
               if(input.name === 'height') {
                   height = input.value;
               }
               if(input.name === 'weight') {
                   weight = input.value;
               }
           });

            if(isResult) {
                result = Math.floor(weight / ((length * width * height) / 1000000));
                resultInput.value = result;
            } else {
                resultInput.value = 0;
            }
       })
    });



    calcInputsShort.forEach(item => {
        item.addEventListener('input', (e) => {

            let isResult = true;
            let result = 0;
            let volume = 0;
            let weight2 = 0;

            clearLong();

            e.currentTarget.value = e.currentTarget.value.replace(/[^\d.]/g, '');

            calcInputsShort.forEach(input => {
                if(!input.value) {
                    isResult = false;
                }

                if(input.name === 'volume') {
                    volume = input.value;
                }
                if(input.name === 'weight2') {
                    weight2 = input.value;
                }
            });

            if(isResult) {
                result = Math.floor(weight2 / volume);
                resultInput.value = result;
            } else {
                resultInput.value = 0;
            }
        })
    });


});
