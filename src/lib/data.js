export const getPost = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/news/categories");
    const datas = await res.json();
    return datas.data;
}
export const getNewsPostId = async (category_id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${category_id}`);
    const datas = await res.json();
    return datas.data;
}
