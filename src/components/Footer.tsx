export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer>{` © ${year} - Learney `}</footer>
    )
}