function LoaderButton({ loading, children, ...props }) {
    return (
        <button disabled={loading} {...props}>
            {loading ? 'Loading...' : children}
        </button>
    )
}
export default LoaderButton