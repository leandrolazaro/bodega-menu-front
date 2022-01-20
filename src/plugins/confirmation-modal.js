export default {
    install(Vue) {
        Vue.prototype.$showConfirmationModal = function (title, message, confirm, decline) {
            this.$bvModal
                .msgBoxConfirm(message, {
                    title: title,
                    size: "sm",
                    buttonSize: "sm",
                    okVariant: "danger",
                    okTitle: "Sim",
                    cancelTitle: "Não",
                    footerClass: "p-2",
                    hideHeaderClose: false,
                    centered: true,
                })
                .then((value) => {
                    if (value === true) {
                        confirm();
                    } else {
                        decline();
                    }
                })
                .catch(() => {
                    // An error occurred
                });
        }
    }
}