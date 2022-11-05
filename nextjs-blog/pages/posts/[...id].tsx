export async function getStaticPaths() {
    return {
        id: ['a', 'b', 'c'],
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    // params.id will be like ['a', 'b', 'c']
}