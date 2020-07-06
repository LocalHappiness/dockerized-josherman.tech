import Link from 'next/link'

const links = [
  { href: 'https://github.com/LocalHappiness/dockerized-josherman.tech', label: 'GitHub' },
  { href: 'https://nextjs.org/docs', label: 'Docs' },
]

export default function Footer() {
    return (
      <nav>
        <div className="footer">
          <strong className="footer-creator">Created by: Joshua Herman</strong>
        </div>
      </nav>
    )
  }