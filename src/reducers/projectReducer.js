export const projectsReducer = (state = { projects: [] }, action ) => {

    switch (action.type) {
        case 'LOAD_PROJECTS':
            return { projects: action.projects }
        default:
            return state
    }
}