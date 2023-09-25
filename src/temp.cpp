#include <bits/stdc++.h>
typedef long long ll;
using namespace std;
int func(int n, int k)
{
    
    string s = to_string(n);
    if (n % k != 0)
    {
      
        int sum = 0;
        for (auto x : s)
        {
            sum += (x - '0');
        }
        
        if(sum%k==0)
        {
           
            return 1;
        } 
        else
        {
            return 0;
        }
    }
    else
    {
        return 0;
    }
}
int main()
{
    int n;
    cin >> n;
    int k;
    cin >> k;
    int cnt=0;
    for(int i=1;i<=n;i++)
    {
        int temp=func(i,k);
        if(temp)
        {
            cnt++;
        }
    }
    cout<<cnt<<endl;
    return 0;
}