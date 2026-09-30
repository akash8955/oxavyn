export default function Loading() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      width: '100%',
      backgroundColor: 'var(--background, #fafafa)',
      flexDirection: 'column',
      gap: '20px'
    }}>
      <style>{`
        .spinner {
          width: 50px;
          height: 50px;
          border: 4px solid rgba(115, 90, 229, 0.2);
          border-left-color: #735ae5;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
      <div className="spinner"></div>
      <p style={{ color: '#735ae5', fontFamily: 'Inter, sans-serif', fontWeight: '500' }}>Loading...</p>
    </div>
  );
}
