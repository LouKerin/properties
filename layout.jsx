import '@/assets/styles/globals.css';

function MainLayout({ children }) {
    return (<html>
        <body>
            <main>
                {children}
            </main>
        </body>
    </html>);
}
 
export default MainLayout;