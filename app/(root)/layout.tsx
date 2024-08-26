export default function RootLayout({
    children,
}: Readonly<{
    children.React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.variable} ${IBM_Plex_Serif.variable}`}>{children}>
                
            </body>
        </html>
    )
}