import { Worker } from '@phuocng/react-pdf-viewer';
import Viewer from '@phuocng/react-pdf-viewer';

const App = () => (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.2.228/build/pdf.worker.min.js">
        <div style={{ height: '100vh' }}>
            <Viewer fileUrl="/sample.pdf" defaultScale={1} />
        </div>
    </Worker>
)

export default App
