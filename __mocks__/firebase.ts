import { checkInclusion } from "./axios"

const getDownloadURL = jest.fn().mockImplementation(
    (url: string) => {
        const implementations = [
            ['profile', 'src/img/person/2d57d3b6-7a00-457b-9d3b-7b642cbdaf49.jpeg'],
            ['profile', 'src/img/person/0bf9c99f-a4cf-47eb-a856-7e79208d56b1.jpeg'],
            ['post', 'src/img/post/1b1fe4cf-55a1-4248-9dec-37932c4b24a1.jpeg'],
        ]

        for (let implementation of implementations) {
            const url = implementation[0]
            const data = implementation[1]

            checkInclusion(url, data)
        }

        throw new Error(`UNMATCHED URL: ${url}`);
    }
)

const firebase = {
    __esModule: true,
    getDownloadURL,
    default: () => new Promise(() => { }),
}

export default firebase;