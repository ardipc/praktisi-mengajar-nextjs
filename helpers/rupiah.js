export const changeRp = (value) => {
    return value.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
}