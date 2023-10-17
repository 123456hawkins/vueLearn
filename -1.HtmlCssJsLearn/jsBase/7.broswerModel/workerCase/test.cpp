#include <iostream>
#include <chrono>
using namespace std;

bool isPrime(int number)
{
  if (number <= 1)
    return false;
  if (number <= 3)
    return true;

  if (number % 2 == 0 || number % 3 == 0)
    return false;

  for (int i = 5; i * i <= number; i += 6)
  {
    if (number % i == 0 || number % (i + 2) == 0)
      return false;
  }

  return true;
}

int main()
{
  int start, end;
  cout << "Enter the range to find prime numbers (start and end): ";
  cin >> start >> end;

  cout << "Finding prime numbers in the range [" << start << ", " << end << "]..." << endl;

  auto start_time = chrono::high_resolution_clock::now();

  cout << "Prime numbers in the range [" << start << ", " << end << "]: " << endl;

  for (int i = start; i <= end; i++)
  {
    if (isPrime(i))
    {
      cout << i << " ";
    }
  }

  cout << endl;

  auto end_time = chrono::high_resolution_clock::now();
  auto duration = chrono::duration_cast<chrono::milliseconds>(end_time - start_time);

  cout << "Time taken: " << duration.count() << " milliseconds" << endl;

  return 0;
}
