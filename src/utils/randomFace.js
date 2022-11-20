export const randomFace = async () => {
    const res = await fetch('https://fakeface.rest/face/json');
    const data = await res.json();
    console.log(data);
    return data.image_url;
}