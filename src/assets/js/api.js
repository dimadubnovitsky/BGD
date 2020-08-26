export const sendData = async (value) => {
  const url = 'subscribe.php';

  try {
    const response = await fetch(url, {
      method: 'POST',
      body: `email=${value}`,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
  } catch (error) {
    console.log('error:', error);
  }
};
