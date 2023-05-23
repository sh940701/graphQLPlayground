

window.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        React.createElement(GraphiQL, {
            fetcher: GraphiQL.createFetcher({
                url: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
            }),
            defaultEditorToolsVisibility: true,
        }),
        document.getElementById('graphiql'),
    );
})
