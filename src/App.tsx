import ImageComparison from './components/ImageComparison.tsx'

interface ComparisonData {
  beforeSrc: string
  afterSrc: string
  title: string
  description: string
  beforeLabel?: string
  afterLabel?: string
}

const comparisons: ComparisonData[] = [
  {
    beforeSrc: '/images/white-balloon.png',
    afterSrc: '/images/white-balloon_compare.png',
    title: 'Create Perfect Product Comparison',
    description: 'Instantly upload preferred Images, Modify the Label and add Alter Tag',
    beforeLabel: 'Before',
    afterLabel: 'After',
  },
  {
    beforeSrc: '/images/spot.png',
    afterSrc: '/images/spot-compare.png',
    title: 'Modify Image Orientation In Advance',
    description: 'Change Image Orientation Vertically or Horizontally and Toggle Image Overlay',
    beforeLabel: 'Before',
    afterLabel: 'After',
  },
  {
    beforeSrc: '/images/body-transform.png',
    afterSrc: '/images/body-transform-2-1.png',
    title: 'Ensure Outstanding Image Outlook',
    description: 'Ensure perfect resolution by Increasing or Decreasing the Image Visibility',
    beforeLabel: 'Before',
    afterLabel: 'After',
  },
  {
    beforeSrc: '/images/shirt-before.png',
    afterSrc: '/images/shirt-after.png',
    title: 'Add Exclusive Animation Effects',
    description: 'Use Move Slider In Advance with Hover effect or Instant Click',
    beforeLabel: 'Before',
    afterLabel: 'After',
  },
  {
    beforeSrc: '/images/interior-before.png',
    afterSrc: '/images/interior-after.png',
    title: 'Interior Design Transformation',
    description: 'Visualize room makeovers with a simple drag of the slider',
    beforeLabel: 'Before',
    afterLabel: 'After',
  },
]

export default function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="header-inner">
          <div className="logo">
            <img src="/images/logo.png" alt="Essential Addons" />
          </div>
          <nav className="nav">
            <a href="#">Home</a>
            <a href="#">Widgets</a>
            <a href="#">Docs</a>
            <a href="#">Blog</a>
            <a href="#" className="nav-cta">Get Plugin</a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="hero-content">
          <div className="hero-icon">
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
              <rect width="60" height="60" rx="12" fill="#FF6B35" fillOpacity="0.1"/>
              <path d="M20 18h20a4 4 0 014 4v16a4 4 0 01-4 4H20a4 4 0 01-4-4V22a4 4 0 014-4z" stroke="#FF6B35" strokeWidth="2" fill="none"/>
              <path d="M30 22v16M22 30h16" stroke="#FF6B35" strokeWidth="2.5" strokeLinecap="round"/>
              <circle cx="30" cy="30" r="3" fill="#FF6B35"/>
            </svg>
          </div>
          <h1>Image Comparison</h1>
          <p className="hero-desc">
            EA Image Comparison lets potential buyers compare between your two product images
            Old Vs New in an amazing way. It will visualize product major changes by maintaining
            the perfect image resolution and can style it in advance.
          </p>
          <a href="#" className="btn-docs">Documentation</a>
        </div>
      </section>

      <section className="content-section">
        <div className="content-section-inner">
          {comparisons.map((item, i) => (
            <div className="comparison-card" key={i}>
              <div className="comparison-card-text">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
              <div className="comparison-card-visual">
                <ImageComparison
                  beforeSrc={item.beforeSrc}
                  afterSrc={item.afterSrc}
                  beforeLabel={item.beforeLabel}
                  afterLabel={item.afterLabel}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <img src="/images/logo.png" alt="Essential Addons" className="footer-logo" />
            <p>Most Popular Elementor Addons Powering Up 2 Million+ WordPress Sites.</p>
          </div>
          <div className="footer-links">
            <div className="footer-col">
              <h4>Resources</h4>
              <a href="#">Demo</a>
              <a href="#">Changelog</a>
              <a href="#">Blog</a>
              <a href="#">Privacy Policy</a>
            </div>
            <div className="footer-col">
              <h4>Company</h4>
              <a href="#">About Us</a>
              <a href="#">Affiliates</a>
              <a href="#">Contact</a>
              <a href="#">Career</a>
            </div>
            <div className="footer-col">
              <h4>Get Help</h4>
              <a href="#">Docs</a>
              <a href="#">Support</a>
              <a href="#">Community</a>
              <a href="#">Submit Request</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Copyright &copy; 2026 <a href="#">WPDeveloper</a>. Product from Startise Family.</p>
        </div>
      </footer>
    </div>
  )
}
