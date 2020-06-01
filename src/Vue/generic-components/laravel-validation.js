const laravelValidationMixin = {
    methods: {
        handleLaravelErros: function(errors) {
            if (errors.response.status === 422) {
                errors = errors.response.data.errors;
                for (let error of Object.keys(errors)) {
                    this[error+'Error'] = errors[error][0]
                } 
            } else {
                throw new Error("Something bad happened");
            } 
        },
    },
}

export default laravelValidationMixin;
