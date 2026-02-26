
// promise .all()
// Loading a dashboard - need ALL data before rendering
async function loadDashboard() {
  try {
    const [userProfile, analytics, notifications, settings] = await Promise.all([
      fetch('/api/user/profile'),
      fetch('/api/analytics'),
      fetch('/api/notifications'),
      fetch('/api/settings')
    ]);
    
    renderDashboard({ userProfile, analytics, notifications, settings });
  } catch (error) {
    showErrorPage('Dashboard failed to load');
  }
}


// promise .race()
// only care about first response
async function loadDashboard() {
  try {
    const result = await Promise.race([
      fetch('/api/user/profile'),
      fetch('/api/analytics'),
      fetch('/api/notifications'),
      fetch('/api/settings')
    ]);
    
    renderDashboard(result);
  } catch (error) {
    showErrorPage('Dashboard failed to load');
  }
}

// promise .allSettled()
// all execute even if fail or sucess
async function loadDashboard() {
  try {
    const results = await Promise.allSettled([
      fetch('/api/user/profile'),
      fetch('/api/analytics'),
      fetch('/api/notifications'),
      fetch('/api/settings')
    ]);
    
    renderDashboard(results);
  } catch (error) {
    showErrorPage('Dashboard failed to load');
  }
}


// promise .any()
// atleast one success
async function loadDashboard() {
  try {
    const result = await Promise.any([
      fetch('/api/user/profile'),
      fetch('/api/analytics'),
      fetch('/api/notifications'),
      fetch('/api/settings')
    ]);
    
    renderDashboard(result);
  } catch (error) {
    showErrorPage('Dashboard failed to load');
  }
}