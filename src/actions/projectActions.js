
export const fetchProjects = () => {

    return dispatch => {

        function handleResponse(response) {
            console.log('Response', response)
            dispatch({ type: 'LOAD_PROJECTS', projects: response})
        }

        return fetch('https://gh-pinned-repos-5l2i19um3.vercel.app/?username=aj-rom')
            .then(e => e.json())
            .then(e => handleResponse(e))
            .catch(e => console.log(e))
    }
}