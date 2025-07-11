import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

const Footer = () => {
    return (
    <footer className="py-8 border-t">
        <div className="container mx-auto px-4 text-center">
            <div className="flex justify-center space-x-6 mb-4">
            <a
                href="https://github.com/Abhiktd15"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-700 transition-colors"
                aria-label="GitHub"
            >
                <FiGithub size={20} />
            </a>
            <a
                href="https://linkedin.com/in/Abhiktd15"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-700 transition-colors"
                aria-label="LinkedIn"
            >
                <FiLinkedin size={20} />
            </a>
            <a href="mailto:work.abhiktd15@gmail.com" className="hover:text-purple-700 transition-colors" aria-label="Email">
                <FiMail size={20} />
            </a>
            </div>
            <p className="text-muted-foreground">© {new Date().getFullYear()} Abhishek. All rights reserved.</p>
        </div>
    </footer>
    )
}

export default Footer