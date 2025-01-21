export const photoRequest = searchedQuery => {
    const params = new URLSearchParams({
        key: '48247708-2116833e6be306042b2a4a912',
        q: searchedQuery,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        maxWidth: 500,
    });

    return fetch(`https://pixabay.com/api/?${params}`).then(response => {
        if (!response.ok) {
            throw new Error(response.status);
        };

        return response.json();
    });
};