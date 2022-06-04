const data = jest.fn().mockImplementation((url) => {
    console.log('jest mock url', url)
    if (url.includes(`profile`)) {
        return Promise.resolve({ data: 'src/img/person/2d57d3b6-7a00-457b-9d3b-7b642cbdaf49.jpeg' });
    } else if (url.includes(`profile`)) {
        return Promise.resolve({ data: 'src/img/person/0bf9c99f-a4cf-47eb-a856-7e79208d56b1.jpeg' });
    } else if (url.includes("post")) {
        return Promise.resolve({ data: 'src/img/post/1b1fe4cf-55a1-4248-9dec-37932c4b24a1.jpeg' });
    }

    throw new Error(`UNMATCHED URL: ${url}`);
})

export default data