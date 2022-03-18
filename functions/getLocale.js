function getLocale(field, object, router){
    return object[field + router.locale];
}

export default getLocale;